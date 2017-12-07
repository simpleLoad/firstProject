
'use strict';

(function () {  
    // init 
    window.addEventListener('load', () => init());

    function init () {
        const mountPoint = document.getElementById('mount-point');
        const boxPlayGround = new BoxPlayGround(mountPoint, 10, 10);
        boxPlayGround.turnTo('right');
        // render UI
        boxPlayGround.render();

        const input = document.querySelector('input[type="text"]');
        const execBtn = document.getElementsByTagName('button')[0];
        const execCommand = () => {
            const inputVal = input.value.trim();
            if (!inputVal) return;

            try {
                const cmd = inputVal.split(/\s+/);
                switch (cmd[0].toUpperCase()) {
                    case 'GO'   : boxPlayGround.go(); break;

                    case 'TUN'  :
                    case 'TURN' : boxPlayGround.turnTo(cmd[1]); break; 

                    default: alert('Invalid command!');
                }
            } catch (e) {
                alert(e);
            }
        };
        execBtn.addEventListener('click', execCommand);
        window.addEventListener('keyup', e => (e.key === 'Enter') && execCommand() );
    }

})();