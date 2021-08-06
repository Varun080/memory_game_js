document.addEventListener('DOMContentLoaded', () => {
    //card option
    const cardArray = [
        {
            name: 'image1',
            img: 'images/image1.png'
        },
        {
            name: 'image2',
            img: 'images/image2.png'
        },
        {
            name: 'image3',
            img: 'images/image3.png'
        },
        {
            name: 'image4',
            img: 'images/image4.png'
        },
        {
            name: 'image5',
            img: 'images/image5.png'
        },
        {
            name: 'image6',
            img: 'images/image6.png'
        },
        {
            name: 'image7',
            img: 'images/image7.png'
        }, 
        {
            name: 'image8',
            img: 'images/image8.png'
        }, 
        {
            name: 'image9',
            img: 'images/image9.png'
        }, 
        {
            name: 'image10',
            img: 'images/image10.png'
        },
        {
            name: 'image1',
            img: 'images/image1.png'
        },
        {
            name: 'image2',
            img: 'images/image2.png'
        },
        {
            name: 'image3',
            img: 'images/image3.png'
        },
        {
            name: 'image4',
            img: 'images/image4.png'
        },
        {
            name: 'image5',
            img: 'images/image5.png'
        }, 
        {
            name: 'image6',
            img: 'images/image6.png'
        }, 
        {
            name: 'image7',
            img: 'images/image7.png'
        }, 
        {
            name: 'image8',
            img: 'images/image8.png'
        }, 
        {
            name: 'image9',
            img: 'images/image9.png'
        }, 
        {
            name: 'image10',
            img: 'images/image10.png'
        },
    ]
    cardArray.sort(()=>0.5 - Math.random())

    const grid = document.querySelector('.grid')
    const resultDisplay = document.querySelector('#result')
    const BADresult = document.querySelector('#BADresult')
    var cardChoosen =[]
    var cardChoosenId = []
    var cardWon = []
    var wrongMove = 0
    //create game bord
    function createBord() {
        for (let i = 0; i < cardArray.length; i++) {
            var card = document.createElement('img')
            card.setAttribute('src', 'images/front.jpg')
            card.setAttribute('data-id', i)
            card.addEventListener('click',flipcard)
            grid.appendChild(card)
            console.log(card)
        }
    }
    //chexk matches
    function checkFormatch(){
        var card = document.querySelectorAll('img')
        let optionONE = cardChoosenId[0]
        let optionTwo = cardChoosenId[1]
        if (cardChoosen[0] === cardChoosen[1] ){
            if (cardChoosenId[0]===cardChoosenId[1]){
                // alert("You Can't Choose Same Card Again")
                card[optionTwo].setAttribute('src','images/front.jpg')
            }else{
                // alert("You Found Match")
                card[optionONE].setAttribute('src','images/unnaned.png')
                card[optionTwo].setAttribute('src','images/unnaned.png')
                let cardin = cardWon.includes(cardChoosen[0])
                if (cardin === false){
                    cardWon.push(cardChoosen[0])
                }
                console.log(cardin)
                
                console.log(cardWon)
            }

        }else{
            card[optionTwo].setAttribute('src','images/front.jpg')
            card[optionONE].setAttribute('src','images/front.jpg')
            // alert("Sorry, Try Again")
            wrongMove++
        }
        cardChoosen = []
        cardChoosenId = []
        resultDisplay.textContent = cardWon.length
        BADresult.textContent = wrongMove
        if(cardWon.length===cardArray.length/2){
            resultDisplay.textContent = 'Congratulation'
        }
    } 

    //flip card
    function flipcard(){
        var cardid = this.getAttribute("data-id")
        cardChoosen.push(cardArray[cardid].name)
        cardChoosenId.push(cardid)
        this.setAttribute('src',cardArray[cardid].img)
        if (cardChoosenId.length === 2){
            setTimeout(checkFormatch,500)
        }
        
    }
    createBord()
})