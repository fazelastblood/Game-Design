//Floor
var floorGeometry = new THREE.CubeGeometry(10, 1, 10);
var floorMaterial = new THREE.MeshLambertMaterial({map: new THREE.TextureLoader().load('image'), side: THREE.DoubleSide});
var floorCube = new THREE.Mesh(floorGeometry, floorMaterial);
floorCube.position.y = -5;
screen.add(floorCube);



var textureLoader = new THREE.TextureLoader();
crateTexture = textureLoader.load("crate0/crate0_diffuse.png");
crateBumpMap = textureLoader.load("crate0/crate0_bump.png");
crateNormalMap = textureLoader.load("crate0/crate0_normal.png");
	
// Create mesh with these textures
crate = new THREE.Mesh(
	new THREE.BoxGeometry(3,3,3),
	new THREE.MeshPhongMaterial({
		color:0xffffff,
		
		map:crateTexture,
		bumpMap:crateBumpMap,
		normalMap:crateNormalMap
	})
);