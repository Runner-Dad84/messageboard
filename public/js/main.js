console.log('This is a test from main.js')

const buttons = document.querySelectorAll('.viewSub')
buttons.forEach(button => {
    button.addEventListener('click', ()=>{
        let commentID = button.id;
        return commentID;
    })
})