## 논의사항

1. 어떤 요소까지 공유할것인지 (atoms, moluculs등)
2. webpack5 이상만 가능
3. 디펜던시 공유가능
4. 부모앱이 터지면 다 터짐 -> s3같은 자산 저장소에 넣는 -> 그냥 ci/cd 넣어서 그 주소 가져가면 됨 -> 문제는 바뀐부분에 대해 pdp에 안알려줄수있음 ->

## 방향성

1. npm에 올리는방법 (매번 패치해야하고의존성 충돌)
2. s3에 코드를 올리는 방법 (해야할게 많음)
3. iframe - fuck
4. federation - home에서 header, footer 컴포넌트 업뎃하면 다른 앱도 자동으로 업됨,

## state

1. 서로 공유하지 않는게 가장 중요함
2. 같은 포트면 state 공유가능
3. 다른 포트면 federation으로는 공유 불가능
