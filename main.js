// Function to get art info when image is clicked
/**
 * @param img_index
 * @param info_index
 * 
 */
async function clickedEvent(img_index, info_index) {
    //get art info
    let info = document.getElementsByTagName('img')[img_index].attributes[1].value;

    let headers = new Headers([
        ['Content-Type', 'application/json'],
        ['Accept', 'application/json']
    ]);

    let request = new Request(`https://api.artic.edu/api/v1/artworks/${info}`, {
        method: 'GET',
        headers: headers
    });

    let result = await fetch(request);

    let response = await result.json();

    console.log(response);
    
    let params = `scrollbars=no,resizable=no,status=no,location=no,toolbar=no,menubar=no,
width=0,height=0,left=-1000,top=-1000`;
    function openWindow (){
        window.open(`https://www.artic.edu/artworks/${info}`, 'test', params);
    };
    openWindow();

    // function dataPopUp(url) {
    //     popUpWindow = window.open(`https://api.artic.edu/api/v1/artworks/${info}`, 'popUpWindow','height=500,width=500,left=100,top=100,resizable=yes,scrollbars=yes,toolbar=yes,menubar=no,location=no,directories=no, status=yes');
    // }
};

/**
 * @param id
 * @param event
 */
function getInfo(id,event){
    switch(id){
        case 'fig1': {
            event.stopPropagation();
            clickedEvent(0,3)
            break;
        }
        case 'fig2': {
            event.stopPropagation();
            clickedEvent(1,3)
            break;
        }
        case 'fig3': {
            event.stopPropagation();
            clickedEvent(2,3)
            break;
        }
        case 'fig4': {
            event.stopPropagation();
            clickedEvent(3,0)
            break;
        }
        case 'fig5': {
            event.stopPropagation();
            clickedEvent(4,0)
            break;
        }
        case 'fig6': {
            event.stopPropagation();
            clickedEvent(5,1)
            break;
        }
    }
}