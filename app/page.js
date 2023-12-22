export default function Home() {

  return (
    <div>
      안녕 난 nextJS 야
    </div>

    // await fetch("/URL" , { cache: "no-store"}); | 실시간 데이터 중요할 때 no caching
    // await fetch("/URL" , { cache: "force-cache"}); | 데이터를 caching 해두고 재사용
    // await fetch("/URL") 기본 fetch는 cache 사용해줌 위와 동일함.
    // await fetch("/URL" , { next : { revalidate : 60 }}) | revalidate.value 주기로 cache 데이터 갱신
  )
}