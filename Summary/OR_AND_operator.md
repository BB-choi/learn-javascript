# OR, AND 연산자

**OR**
첫번째 true를 발견하면 평가를 멈춘다.

**AND**
첫번째 false를 발견하면 평가를 멈춘다.

### 성능을 위한 평가 배치

운전면허가 있고(80), 시력이 좋고(60), 여군(7)인 경우 찾기

✔ **여군인데**, 시력이 좋고, 운전면허가 있는 사람

👉 첫 번째 평가에서 93%를 걸러낼 수 있다.

### 우선순위

AND가 OR보다 우선 (먼저 평가된다)

👉 *의도한 바와 다른 결과*가 나올 수 있으므로 반드시 확인할 것

🔍남자이고, 이름이 Mike이거나 성인이면 통과

`if (gender === 'M' && name === 'Mike' || isAdult)`
는

`if ((gender === 'M' && name === 'Mike') || isAdult)`
와 같다.

의도한 바와 **다른 결과**가 나온다.

(` ()와 isAdult 둘 중 하나라도 만족하면 참`)

✔ 올바르게 작성하기

`if (gender === 'M' && (name === 'Mike' || isAdult))`