import classes from './font-channel.module.css'

export default function ChannelSpan({children}) {
  return (
    <>
      <span className={classes.ch}>{children}</span>
      <span className={classes.sub}>CH</span>
    </>
  );
}
