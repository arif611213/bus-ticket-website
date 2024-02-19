


const buttons = document.querySelectorAll('.btn');


for (let index = 0; index < buttons.length; index++) {
    const button = buttons[index];
    
    button.addEventListener('click' , function (){
        
        // get the innerText..
        const titleText = button.querySelector('h2').innerText;
        const seatContainer = document.getElementById('seatContainer');
        const pera = document.createElement('p');
        pera.innerText = titleText;
        seatContainer.appendChild(pera);
        
        const ticketType = document.getElementById('ticketType');
        const pera2 = document.createElement('p');
        pera2.innerText = "Economy";
        ticketType.appendChild(pera2);
        
        const ticketPrice = document.getElementById('ticketPrice');
        const perTicketPrice = parseFloat(document.getElementById('perTicketPrice').innerText);
        const pera3 = document.createElement('p');
        pera3.innerText = perTicketPrice;
        ticketPrice.appendChild(pera3);
    
        // set the text in seat...

        // Seat Update ..
        const currentSeat = document.getElementById('currentSeat');
        const convertToNumber = parseFloat(currentSeat.innerText);
        const updateSeat = convertToNumber + 1;
        currentSeat.innerText = updateSeat;
        
        // total seat minus purchase seat..
        const totalSeat = document.getElementById('totalSeat');
        const totalSeatText = totalSeat.innerText;
        const convertInNumber = parseInt(totalSeatText);
        const remaingSeat = convertInNumber - 1;
        totalSeat.innerText = remaingSeat;
        
        // Total Price into per seat price ...
        const oneTicketPrice = document.getElementById('perTicketPrice');
        const oneTicketPriceText = oneTicketPrice.innerText;
        const convertText = parseFloat(oneTicketPriceText);
        const oneTicketPriceNumber = convertText;
        
        const update_Price = document.getElementById('updatePrice');
        const newTotalPrice = oneTicketPriceNumber * updateSeat;
        update_Price.innerText = newTotalPrice;


        if(updateSeat === 4){
            
            alert('You Can buy maximum 4 seat');
            disableTicketSection();
            
        }
        else{
            
        }

        function disableTicketSection() {
            
      
            // Disable all buttons within the ticket section
            for (let index = 0; index < buttons.length; index++) {
              buttons[index].disabled = true;
            }
        }

        
        
        // const applyButton = document.getElementById('applyButton');

        // console.log(applyButton);


        

        setBackgroundColorById(titleText);  
    })
    
}



function setBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('bg-green-600');
}

