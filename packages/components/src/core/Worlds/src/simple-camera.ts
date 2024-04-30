import * as THREE from "three";
import CameraControls from "camera-controls";
import {
  Component,
  Disposable,
  Updateable,
  Event,
  BaseCamera,
} from "../../Types";
import { Components } from "../../Components";

/**
 * A basic camera that uses
 * [yomotsu's cameracontrols](https://github.com/yomotsu/camera-controls) to
 * easily control the camera in 2D and 3D. Check out it's API to find out
 * what features it offers.
 */
export class SimpleCamera extends BaseCamera implements Updateable, Disposable {
  /** {@link Updateable.onBeforeUpdate} */
  readonly onBeforeUpdate = new Event<SimpleCamera>();

  /** {@link Updateable.onAfterUpdate} */
  readonly onAfterUpdate = new Event<SimpleCamera>();

  readonly onAspectUpdated = new Event();

  /** {@link Disposable.onDisposed} */
  readonly onDisposed = new Event<string>();

  readonly three: THREE.PerspectiveCamera;

  private _allControls = new Map<string, CameraControls>();

  /**
   * The object that controls the camera. An instance of
   * [yomotsu's cameracontrols](https://github.com/yomotsu/camera-controls).
   * Transforming the camera directly will have no effect: you need to use this
   * object to move, rotate, look at objects, etc.
   */
  get controls() {
    if (!this.currentWorld) {
      throw new Error("This camera needs a world to work!");
    }
    const controls = this._allControls.get(this.currentWorld.uuid);
    if (!controls) {
      throw new Error("Controls not found!");
    }
    return controls;
  }

  /** {@link Component.enabled} */
  get enabled() {
    if (this.currentWorld === null) {
      return false;
    }
    return this.controls.enabled;
  }

  /** {@link Component.enabled} */
  set enabled(enabled: boolean) {
    this.controls.enabled = enabled;
  }

  constructor(components: Components) {
    super(components);
    this.three = this.setupCamera();

    this.setupEvents(true);

    this.onWorldChanged.add(({ action, world }) => {
      // This makes sure the DOM element of the camera
      // controls matches the one of the renderer for
      // a specific world
      if (action === "added") {
        const controls = this.newCameraControls();
        this._allControls.set(world.uuid, controls);
      }

      if (action === "removed") {
        const controls = this._allControls.get(world.uuid);
        if (controls) {
          controls.dispose();
          this._allControls.delete(world.uuid);
        }
      }
    });
  }

  /** {@link Disposable.dispose} */
  dispose() {
    this.setupEvents(false);
    this.enabled = false;
    this.onAspectUpdated.reset();
    this.onBeforeUpdate.reset();
    this.onAfterUpdate.reset();
    this.three.removeFromParent();
    this.onDisposed.trigger();
    this.onDisposed.reset();
    for (const [_id, controls] of this._allControls) {
      controls.dispose();
    }
  }

  /** {@link Updateable.update} */
  update(_delta: number) {
    if (this.enabled) {
      this.onBeforeUpdate.trigger(this);
      this.controls.update(_delta);
      this.onAfterUpdate.trigger(this);
    }
  }

  /**
   * Updates the aspect of the camera to match the size of the
   * {@link Components.renderer}.
   */
  updateAspect = () => {
    if (!this.currentWorld || !this.currentWorld.renderer) return;
    if (this.three instanceof THREE.OrthographicCamera) {
      return;
    }
    if (this.currentWorld.renderer?.isResizeable()) {
      const size = this.currentWorld.renderer.getSize();
      this.three.aspect = size.width / size.height;
      this.three.updateProjectionMatrix();
      this.onAspectUpdated.trigger();
    }
  };

  private setupCamera() {
    const aspect = window.innerWidth / window.innerHeight;
    const camera = new THREE.PerspectiveCamera(60, aspect, 1, 1000);
    camera.position.set(50, 50, 50);
    camera.lookAt(new THREE.Vector3(0, 0, 0));
    return camera;
  }

  private newCameraControls() {
    if (!this.currentWorld) {
      throw new Error("This camera needs a world to work!");
    }
    if (!this.currentWorld.renderer) {
      throw new Error("This camera needs a renderer to work!");
    }
    CameraControls.install({ THREE: SimpleCamera.getSubsetOfThree() });
    const { domElement } = this.currentWorld.renderer.three;
    const controls = new CameraControls(this.three, domElement);
    controls.smoothTime = 0.2;
    controls.dollyToCursor = true;
    controls.infinityDolly = true;
    return controls;
  }

  private setupEvents(active: boolean) {
    if (active) {
      window.addEventListener("resize", this.updateAspect);
    } else {
      window.removeEventListener("resize", this.updateAspect);
    }
  }

  private static getSubsetOfThree() {
    return {
      MOUSE: THREE.MOUSE,
      Vector2: THREE.Vector2,
      Vector3: THREE.Vector3,
      Vector4: THREE.Vector4,
      Quaternion: THREE.Quaternion,
      Matrix4: THREE.Matrix4,
      Spherical: THREE.Spherical,
      Box3: THREE.Box3,
      Sphere: THREE.Sphere,
      Raycaster: THREE.Raycaster,
      MathUtils: THREE.MathUtils,
    };
  }
}
