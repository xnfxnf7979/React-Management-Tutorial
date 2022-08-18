React
    1. component 기반


* var 
    no use

* const 
    선언 후 고정 값

* let
    유동적인 값 


* props
    변경 불가 (부모가 자식에게 넘겨주는 값)
* state  
    변경 가능 >> setState() 사용!!! (자신이 갖고있는 값)


* lifecycle api
    shouldComponentUpdate 
        updating 함수... 실제 브라우저 돔 상에는 반영안되고 버추얼 돔에 업데이트해서 가져오는 식으로 사용? 돼서 효율적임

* constructor
    컴포넌트 만들때 사용 