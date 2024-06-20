import classes from './main-header.module.css'

export default function ChannelSpan({children}) {
  return (
    <>
      <span>{children}</span>
      <span className={classes.ch}>CH</span>
    </>
  );
}
