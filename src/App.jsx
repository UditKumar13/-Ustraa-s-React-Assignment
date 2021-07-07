import React from 'react';
import Categories from './categories/categories';
import {Typography, AppBar,Card, CardActions,CardContent,CardMedia,CssBaseline,Grid,Toolbar,Container} from '@material-ui/core';
import {CompareArrowsOutlined, PhotoCamera} from '@material-ui/icons';


class App extends React.Component{


    state = {
        categories : '',
        categories_names: ''
    };

    componentDidMount(){
      
        console.log("we are in component did mount (App.js)");
    }

    

    render(){
       
                
        return(
          
            <>
            
            <CssBaseline/>
            <AppBar position="relative">
         
                <Toolbar>
                    <PhotoCamera/>
                    <Typography variant="h6" >
                        Ustraa
                     </Typography>
                </Toolbar>
         
            </AppBar>
         
            <main>
                <div>
                    <Container maxWidth="sm">
                        <Typography variant="h2" align="center" color="textPrimary"  gutterBottom>
                            Ustraa Asignment
                         </Typography>
                     </Container>
                </div>
                <Categories/>
                
                    
            </main>
         
         
         
         
            </>

        );

    }

}



export default App;
