`GlobalStyle`은 먼저 `styled-normalize`를 이용해 모든 브라우저가 각각의 HTML 요소를 표준에 따라 일관되게 표시하도록 설정합니다.
그 뒤 JunoUI에서 권장하는 전역 스타일을 지정합니다.

그렇기 때문에 `GlobalStyle`을 **리액트 트리의 최상단**에 위치시키는 것이 권장됩니다.
