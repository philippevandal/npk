AFRAME.registerComponent('restriction', {
  tick: function () {
    var el = this.el;
    var object = el.getObject3D('mesh');
    var cameraEl = this.el.sceneEl.camera.el;
    var worldPos = new THREE.Vector3();
    worldPos.setFromMatrixPosition(cameraEl.object3D.matrixWorld);

    var box = new THREE.Box3();
    box.setFromObject(object);

    if(worldPos.x > box.max.x){
      // document.querySelector("#rig").setAttribute('position', {x: box.max.x, y: 0.3, z: worldPos.z});
      document.querySelector("#rig").object3D.position.set(box.max.x, 1.6, worldPos.z);
    }

    if(worldPos.x < box.min.x){
      // document.querySelector("#rig").setAttribute('position', {x: box.min.x, y: 0.3, z: worldPos.z});
      document.querySelector("#rig").object3D.position.set(box.min.x, 1.6, worldPos.z);
    }

    if(worldPos.z > box.max.z){
      // document.querySelector("#rig").setAttribute('position', {x: worldPos.x, y: 0.3, z: box.max.z});
      document.querySelector("#rig").object3D.position.set(worldPos.x, 1.6, box.max.z);
    }

    if(worldPos.z < box.min.z){
      // document.querySelector("#rig").setAttribute('position', {x: worldPos.x, y: 0.3, z: box.min.z});
      document.querySelector("#rig").object3D.position.set(worldPos.x, 1.6, box.min.z);
    }
  }
});
