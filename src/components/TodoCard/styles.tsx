import { makeStyles } from '@material-ui/core/styles';

export const styles = makeStyles(theme => ({
    card: {
      boxSizing: 'border-box',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      color: 'white',
      height: '100%',
      maxHeight: '200px',
      width: '300px',
      overflow: 'auto',
      position: 'relative'
    },
    desc: {
      textAlign: 'justify'
    },
    chips: {
      paddingTop: '20px'
    },
    chip: {
      marginRight: '20px',
      color: '#73706f'
    },
    buttonsContainer: {
      display: 'flex',
      flexWrap: 'wrap',
      paddingTop: '0'
    },
    todoBtnDeleteContainer: {
      display: 'flex',
      justifyContent: 'flex-end',
      paddingTop: '0'
    },
    todoBtnApproveContainer: {
      display: 'flex',
      justifyContent: 'space-between'
    },
    circle: {
      display: 'flex',
      width: '50px',
      height: '50px',
      backgroundColor: 'none',
      color: 'white',
      borderRadius: '50%',
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: '-5px',
      right: '-2px',
    },
    doneTodo: {
      backgroundColor: '#5abf4e',
      color: '#1e4017'
    },
    takableTodo: {
      backgroundColor: '#4465b8',
      color: '#132247'
    },
    pendingTodo: {
      backgroundColor: '#a3a118',
      color: '#54530d'
    },
    nobodyWantsTodo: {
      backgroundColor: '#717378',
      color: 'white'
    }
}));