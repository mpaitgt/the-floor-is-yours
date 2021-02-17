import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    maxWidth: '1000px',
    marginTop: theme.spacing(10)
  },
  about: {
    padding: theme.spacing(2),
  },
  paragraph: {
    marginTop: theme.spacing(3),
    fontFamily: 'inherit',
    fontSize: '16px',
    color: 'var(--white)',
    [theme.breakpoints.down('sm')]: {
      fontSize: '14px',
    },
  },
  image: {
    borderRadius: '50%',
    width: '100%',
  }
}));

export const classes = useStyles();