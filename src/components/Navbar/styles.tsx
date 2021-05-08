import { makeStyles } from '@material-ui/core/styles';

export const styles = makeStyles( theme => ({
    appbarDisplay: {
      paddingTop: '.5em',
        paddingBottom: '.5em',
        border: '1px solid #a2a2a2',
        backgroundColor: '#f4f4f4',
        boxShadow: '0px 0px 14px 0px rgba(0,0,0,0.75)',
        borderRadius: '5px',
      position: 'sticky',
    },
    toolbarDisplay: {
      display: 'flex',
      justifyContent: 'space-between',
      color: '#73706f',
      [theme.breakpoints.down('xs')]: {
          flexDirection: 'column'   
      }
    },
    logo: {
      textTransform: 'uppercase',
      fontSize: '24px',
      fontVariant: 'small-caps',
      fontWeight: 'bold',
    },
    linksContainer: {
        display: 'flex',
        flexDirection: 'row',
        fontSize: '16px',
        textTransform: `uppercase`,
        whiteSpace: 'nowrap',
        [theme.breakpoints.down('xs')]: {
          flexDirection: 'column',
          padding: '12px 0'
      }
    },
    link: {
      [theme.breakpoints.down('xs')]: {
          padding: '8px 0',
          textAlign: 'center'
      }
    },
    logoutButton: {
    },
    iconText: {
      textDecoration: 'none',
      textTransform: 'uppercase',
      fontSize: '14px',
      letterSpacing: '0.2em',
      marginRight: '5px',
    },
    iconClass: {
        color: '#73706f'
    }
  }));