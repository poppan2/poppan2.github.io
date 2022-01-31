import * as THREE from "../three/build/three.module.js";
// import { GLTFLoader } from "../three/examples/jsm/loaders/GLTFLoader.js";

// the element that'll hold our scene
const container = document.querySelector("#scene-container");
// create a scene
const scene = new THREE.Scene();
scene.background = new THREE.Color(0x000000);
// create a camera
const camera = new THREE.PerspectiveCamera(
  75,
  container.clientWidth / container.clientHeight,
  0.1,
  1000
);
camera.position.set(0, 5, 15);
camera.lookAt(0, 0, 0);


const renderer = new THREE.WebGLRenderer();
renderer.setPixelRatio(window.devicePixelRatio);
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
container.append(renderer.domElement);

// Add Light
const pointLight = new THREE.PointLight(0xffffff);
pointLight.position.set(10, 10, 10);
pointLight.castShadow = true;

const ambientLight = new THREE.AmbientLight(0xffffff);
scene.add(pointLight, ambientLight);

// Create a Cylinder
const cylinderGroup = new THREE.Group();
const cylinderRadius = 10;
const cylinderTexture = new THREE.TextureLoader().load("../images/three/rt5.jpg");
const cylinder = new THREE.Mesh(
  new THREE.CylinderGeometry(cylinderRadius, cylinderRadius, 10, 64, 1, true),
  new THREE.MeshStandardMaterial({
    map: cylinderTexture,
    side: THREE.DoubleSide,
  })
);
cylinder.position.set(0, 10, 10);
cylinder.rotation.x = Math.PI / 2;
cylinder.receiveShadow = true;
cylinderGroup.add(cylinder);

const zAxis = -10;
for (let i = 0; i < 8; i++) {
  if (i % 2 === 0) {
    const cylinderTexture = new THREE.TextureLoader().load("../images/three/rbc.jpg");
    const cylinder = new THREE.Mesh(
      new THREE.CylinderGeometry(
        cylinderRadius,
        cylinderRadius,
        10,
        64,
        1,
        true
      ),
      new THREE.MeshStandardMaterial({
        map: cylinderTexture,
        side: THREE.DoubleSide,
      })
    );
    cylinder.position.set(0, 10, i * zAxis);
    cylinder.rotation.x = Math.PI / 2;
    cylinder.receiveShadow = true;
    cylinderGroup.add(cylinder);
  } else {
    const cylinderTexture = new THREE.TextureLoader().load("../images/three/rt5.jpg");
    const cylinder = new THREE.Mesh(
      new THREE.CylinderGeometry(
        cylinderRadius,
        cylinderRadius,
        10,
        64,
        1,
        true
      ),
      new THREE.MeshStandardMaterial({
        map: cylinderTexture,
        side: THREE.DoubleSide,
      })
    );
    cylinder.position.set(0, 10, i * zAxis);
    cylinder.rotation.x = Math.PI / 2;
    cylinder.receiveShadow = true;
    cylinderGroup.add(cylinder);
  }
}
scene.add(cylinderGroup);

// create a magma ball
const magmaTexture = new THREE.TextureLoader().load("../images/three/magma.jpg");
const magmaBall = new THREE.Mesh(
  new THREE.SphereGeometry(9, 32, 16),
  new THREE.MeshStandardMaterial({ map: magmaTexture, side: THREE.DoubleSide })
);
magmaBall.position.set(0, 9, -70);
scene.add(magmaBall);

// create a group of lines
const lineGroup = new THREE.Group();
const numOfLines = 50;
const finalAngle = Math.PI;
let theta = 0;

for (let i = 0; i < numOfLines; i++) {
  let angleInterval = Math.PI / numOfLines;
  let r = THREE.MathUtils.randInt(6, 15);
  // angle comparison
  if (theta < finalAngle) {
    // set the x, y coordinates
    let x = r * Math.cos(theta);
    let y = r * Math.sin(theta);

    theta += angleInterval;
    // create a line
    const blueLine = new THREE.Mesh(
      new THREE.BoxGeometry(0.1, 0.1, 0.5),
      new THREE.MeshStandardMaterial({ color: 0x242526 })
    );

    // set a line position
    blueLine.position.set(x, y, THREE.MathUtils.randFloatSpread(20));
    blueLine.castShadow = true;
    // add the line to the group
    lineGroup.add(blueLine);
  }
}
scene.add(lineGroup);

// Create a group of blood cells
const WBCGroup = new THREE.Group();
const RBCGroup = new THREE.Group();
const numOfRBC = 250;
const numOfWBC = 50;
const whiteBloodCellTexture = new THREE.TextureLoader().load(
  "./images/three/rough-texture.jpg"
);
const RCBTexture = new THREE.TextureLoader().load("../images/three/rt2.jpg");

let alpha = 0;
// let cylinderAngle = (3/2) * Math.PI;
for (let i = 0; i < numOfWBC; i++) {
  const angleInterval = Math.PI / numOfWBC;
  let r = THREE.MathUtils.randInt(6, 12);

  // angle comparison
  if (alpha < Math.PI) {
    // set the x, y coordinates
    let x = r * Math.cos(alpha);
    let y = r * Math.sin(alpha);

    alpha += angleInterval;

    const whiteBloodCell = new THREE.Mesh(
      new THREE.SphereGeometry(0.3, 10, 5),
      new THREE.MeshStandardMaterial({ map: whiteBloodCellTexture })
    );

    whiteBloodCell.position.set(x, y, THREE.MathUtils.randFloatSpread(20));
    whiteBloodCell.castShadow = true;
    WBCGroup.add(whiteBloodCell);
  }
}
scene.add(WBCGroup);

// create red blood cells
for (let i = 0; i < numOfRBC; i++) {
  // Calculate the x,y position of red blood cells
  let ry;
  const rx = THREE.MathUtils.randFloatSpread(20);
  if (rx > -3 && rx < 3) {
    ry = THREE.MathUtils.randFloat(6, 18);
  } else {
    ry = THREE.MathUtils.randFloat(1, 18);
  }
  // Create Red Blood Cell
  const redTorus = new THREE.Mesh(
    new THREE.TorusGeometry(0.2, 0.2, 20, 20),
    new THREE.MeshStandardMaterial({ map: RCBTexture })
  );

  // set torus position
  redTorus.position.set(rx, ry, THREE.MathUtils.randFloatSpread(20));
  redTorus.castShadow = true;
  RBCGroup.add(redTorus);
}
scene.add(RBCGroup);

function animate() {

  magmaBall.rotation.x += 0.01;
  magmaBall.rotation.y += 0.05;

  // cylinder rotation
  for (let i = 0; i < cylinderGroup.children.length; i++) {
    if (i % 2 === 0) {
      cylinderGroup.children[i].rotation.y += 0.01;
    } else {
      cylinderGroup.children[i].rotation.y -= 0.01;
    }
  }
  // rotate the White blood cells
  for (let i = 0; i < WBCGroup.children.length; i++) {
    WBCGroup.children[i].rotation.x += 0.01;
    WBCGroup.children[i].rotation.y += 0.01;
    WBCGroup.children[i].rotation.z += 0.001;

    // move the WBC along the z-axis
    for (let j = WBCGroup.children[i].position.z; j > -35; j--) {
      if (WBCGroup.children[i].position.z >= -34) {
        WBCGroup.children[i].position.z -= 0.05;
      } else {
        WBCGroup.children[i].position.z = THREE.MathUtils.randFloatSpread(20);
      }
    }
  }
  // rotate the Red Blood Cells
  for (let i = 0; i < RBCGroup.children.length; i++) {
    RBCGroup.children[i].rotation.x += 0.01;
    RBCGroup.children[i].rotation.y += 0.01;
    RBCGroup.children[i].rotation.z += 0.001;

    // move the RBC along the z-axis
    for (let j = RBCGroup.children[i].position.z; j > -35; j--) {
      if (RBCGroup.children[i].position.z >= -34) {
        RBCGroup.children[i].position.z -= 0.1;
      } else {
        RBCGroup.children[i].position.z = THREE.MathUtils.randFloatSpread(20);
      }
    }
  }

  // move the lines through z-axis
  for (let i = 0; i < lineGroup.children.length; i++) {
    lineGroup.children[i].rotation.x += 0.1;

    for (let j = lineGroup.children[i].position.z; j > -35; j--) {
      if (lineGroup.children[i].position.z >= -34) {
        lineGroup.children[i].position.z -= 0.05;
      } else {
        lineGroup.children[i].position.z = THREE.MathUtils.randFloatSpread(20);
      }
    }
  }

  renderer.render(scene, camera);

  requestAnimationFrame(animate);
}

animate();
