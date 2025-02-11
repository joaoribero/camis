document.addEventListener('DOMContentLoaded',function(){
    const music=document.getElementById('bgMusic')
    music.volume=0.2
    const envelopes=document.getElementsByClassName('envelope')
    for(let i=0;i<envelopes.length;i++){
      envelopes[i].addEventListener('click',function(){
        openLetter(i+1)
      })
    }
  })
  function openLetter(id){
    const envelope=document.getElementById('envelope'+id)
    envelope.classList.add('open')
    const letter=document.getElementById('letter'+id)
    letter.style.display='block'
    document.getElementById('overlay').style.display='block'
  }
  function closeLetter(id){
    const letter=document.getElementById('letter'+id)
    letter.style.display='none'
    const envelope=document.getElementById('envelope'+id)
    envelope.classList.remove('open')
    closeOverlayIfNoLetters()
  }
  function closeOverlayIfNoLetters(){
    const letters=document.getElementsByClassName('letter')
    let anyOpen=false
    for(let i=0;i<letters.length;i++){
      if(letters[i].style.display==='block'){
        anyOpen=true
        break
      }
    }
    if(!anyOpen)document.getElementById('overlay').style.display='none'
  }
  document.getElementById('overlay').addEventListener('click',function(){
    const letters=document.getElementsByClassName('letter')
    for(let i=0;i<letters.length;i++){
      letters[i].style.display='none'
    }
    const envelopes=document.getElementsByClassName('envelope')
    for(let j=0;j<envelopes.length;j++){
      envelopes[j].classList.remove('open')
    }
    this.style.display='none'
  })
  