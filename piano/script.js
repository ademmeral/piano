// DEALING WITH THE VOLUME
const volume_ = document.querySelector('input[type="range"]');
let vlm;
document.addEventListener('DOMContentLoaded', e => vlm = +volume_.value  );
volume_.addEventListener('input', e => vlm = +volume_.value );

// HANDLING KEYS
const keys = document.querySelectorAll('main .keys .key');

function getDataKey(e, withKeys) {
   try{
        let dataKey;
        if ( withKeys ) {
            dataKey = e.key
            document.querySelector(`[data-key="${dataKey.toUpperCase()}"]`).classList.add('active');
            setTimeout( () => {
                document.querySelector(`[data-key="${dataKey.toUpperCase()}"]`).classList.remove('active');
            }, 250 );
        }
        else dataKey =  e.currentTarget.dataset.key.toLowerCase();

        const tune = new Audio(`tunes/${dataKey.toLowerCase()}.wav`);
        tune.play();
        tune.volume = vlm;
        
    } catch (err) {
        console.log(err)
        document.querySelector('output').classList.remove('d-none');
        setTimeout( () => document.querySelector('output').classList.add('d-none'), 5300 );
    }

}
keys.forEach( key_ => key_.addEventListener('click', e => getDataKey(e, false)) );
document.body.addEventListener('keydown', e => getDataKey(e, true));
// KEY TOGGLE
const toggle = document.querySelector('input[type="checkbox"]');
toggle.addEventListener('click', e => keys.forEach( key => key.querySelector('span').classList.toggle('hide') ) );
//CLOSE POPUP
const closeBtn = document.querySelector('.close .fa-xmark')
closeBtn.addEventListener('click', e => document.querySelector('output').classList.add('d-none') );
