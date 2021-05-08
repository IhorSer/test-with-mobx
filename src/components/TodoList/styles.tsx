import { makeStyles } from '@material-ui/core/styles';

export const styles = makeStyles(theme => ({
    topContainer: {
        justifyContent: 'center'
    },
    container: {
       padding: '20px',
       flexWrap: 'wrap',
    },
    box: {
        display: 'flex',
        width: '30%',
        justifyContent: 'center',   
        [theme.breakpoints.down('md')]: {
            width: '45%',
        },
        [theme.breakpoints.down('xs')]: {
            width: '100%'   
        }
    },
    header: {
        paddingTop: '20px'
    }
}));