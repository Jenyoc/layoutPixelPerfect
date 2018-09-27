(bicycles=()=>{
  let qs = document.querySelector.bind(document),
      buttons=document.getElementsByClassName('btn');

  (firstSlider=()=> {
    slide1 = (event) => {
      for (let el of buttons) {
        el.removeAttribute('id')
      }
      qs('.picTwo').setAttribute('class', 'picTwo opacity0');
      qs('.picOne').setAttribute('class', 'picOne opacity1');
      qs('.sliderContentBox').setAttribute('class', 'sliderContentBox gradientToRight');
      event.target.setAttribute('id', 'btnActive');
    };
    slide2 = (event) => {
      for (let el of buttons) {
        el.removeAttribute('id')
      }
      qs('.picOne').setAttribute('class', 'picOne opacity0');
      qs('.picTwo').setAttribute('class', 'picTwo opacity1');
      qs('.sliderContentBox').setAttribute('class', 'sliderContentBox gradientToBottom');
      event.target.setAttribute('id', 'btnActive');
    };
    slide3 = (event) => {
      for (let el of buttons) {
        el.removeAttribute('id')
      }
      qs('.picTwo').setAttribute('class', 'picTwo opacity0');
      qs('.picOne').setAttribute('class', 'picOne opacity1');
      qs('.sliderContentBox').setAttribute('class', 'sliderContentBox gradientToRight');
      event.target.setAttribute('id', 'btnActive');
    };
    slide4 = (event) => {
      for (let el of buttons) {
        el.removeAttribute('id')
      }
      qs('.picOne').setAttribute('class', 'picOne opacity0');
      qs('.picTwo').setAttribute('class', 'picTwo opacity1');
      qs('.sliderContentBox').setAttribute('class', 'sliderContentBox gradientToBottom');
      event.target.setAttribute('id', 'btnActive');
    };

    qs('.btn1').addEventListener('click', slide1);
    qs('.btn2').addEventListener('click', slide2);
    qs('.btn3').addEventListener('click', slide3);
    qs('.btn4').addEventListener('click', slide4);
  })();
  (secondSlider=()=>{
    serviceSlide = () => {
      if (qs('.servicesTextFirst').hasAttribute('id')) {
        qs('.servicesArrowLeft').setAttribute('class', 'arrow servicesArrowLeft');
        qs('.servicesArrowRight').setAttribute('class', 'arrow servicesArrowRight');
        qs('.servicesContent').setAttribute('class', 'servicesContent bgGd');
        qs('.bgWhite').setAttribute('class', 'bgWhite opacity0');
        qs('.firstH').setAttribute('class', 'serviceHeader firstH');
        qs('.secondH').setAttribute('class', 'serviceHeader secondH');
        qs('.servicesTextFirst').setAttribute('class', 'servicesTextFirst opacity1');
        qs('.servicesTextSecond').setAttribute('class', 'servicesTextSecond opacity0');
        qs('.servicesTextFirst').removeAttribute('id');
        qs('.secondP').setAttribute('class', 'secondP');
      }
    else
      {
        qs('.servicesTextFirst').setAttribute('class', 'servicesTextFirst opacity0');
        qs('.servicesTextSecond').setAttribute('class', 'servicesTextSecond opacity1');
        qs('.servicesArrowRight').setAttribute('class', 'arrow servicesArrowRight  textBlack');
        qs('.servicesArrowLeft').setAttribute('class', 'arrow servicesArrowLeft  textBlack');
        qs('.firstH').setAttribute('class', 'serviceHeader firstH textBlack');
        qs('.secondH').setAttribute('class', 'serviceHeader secondH textBlack');
        qs('.servicesTextFirst').setAttribute('id', 'arrowActive');
        qs('.servicesContent').setAttribute('class', 'servicesContent');
        qs('.bgWhite').setAttribute('class', 'bgWhite opacity1');
        qs('.secondP').setAttribute('class', 'secondP textBlack');
      }
    };

    qs('.servicesArrowLeft').addEventListener('click',serviceSlide);
    qs('.servicesArrowRight').addEventListener('click',serviceSlide);
  })();
  (thirdSlider=()=>{
    colSlideRight=()=>{
      qs('.collectionItemsBox').insertBefore(qs('.collectionItemsBox').children[2],qs('.collectionItemsBox').children[0]);
    };
    colSlideLeft=()=>{
      qs('.collectionItemsBox').insertBefore(qs('.collectionItemsBox').children[1],qs('.collectionItemsBox').children[0]);
      qs('.collectionItemsBox').insertBefore(qs('.collectionItemsBox').children[2],qs('.collectionItemsBox').children[1]);
    };
    qs('.colRightArrow').addEventListener('click', colSlideRight);
    qs('.colLeftArrow').addEventListener('click', colSlideLeft);
  })();
    qs('.searchIco').addEventListener('click', ()=>{
      qs('.searchCont').classList.toggle("d-none");
      qs('.loginCont').setAttribute('class', 'loginCont d-none');
    });
    qs('.userIco').addEventListener('click', ()=>{
      qs('.loginCont').classList.toggle("d-none");
      qs('.searchCont').setAttribute('class',"searchCont d-none");
    });
})();