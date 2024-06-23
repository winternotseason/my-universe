import classes from './cut.module.css'

export default function Cut({header}) {
  return (
    <div className={classes.cut}>
      <h1>{header}</h1>
      <p>로그인이 필요한 페이지입니다.</p>
    </div>
  );
}
