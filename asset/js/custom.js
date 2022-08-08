
$(function(){
    // 1. swiper slide
    const swiper = new Swiper(".slide", {
        slidesPerView: "auto",
        spaceBetween: 30,
      });
    
    // 2. 국가 변경 셀렉트 
    $('#lang').on('change',function(){ // select 선택시 해당 선택값 변화
        const currLang = $(this).val(); // select 선택값 바뀔 때 해당 벨류값 선언
        //프랑스,네덜란드 선택되면 해당 페이지로 이동 // 자기자신은 그대로
        // window.open(currLang); // 새창이동
        window.location.href = currLang; // 현재 창에서 이동
        //이동 후 영문 셀렉트 선택상태로
        $("#lang option:eq(0)").prop("selected",true);
    })
});