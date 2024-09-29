AFRAME.registerComponent("bowling-balls", {
    init: function(){
        this.throwBall()
    },
    throwBall: function(){
        window.addEventListener("keydown", (e) => {
            if(e.key === 'z'){
                var cam = document.querySelector("#camera").object3D;

                var direction = new THREE.Vector3();
                cam.getWorldDirection(direction);

                var ball = document.querySelector("#bowling-ball");
                ball.setAttribute("velocity", direction.multiplyScalar(-10));
            }
        })
    }
})