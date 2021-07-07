import React from 'react';
import axios from 'axios';

class Categories extends React.Component{

 state = {
        categories : '',
        categories_names: ''
    };


    componentDidMount(){
        this.fetchDataCategories();
        console.log("we are in component did mount (Categories)");
    }


    fetchDataCategories = () =>{
        axios.get('https://backend.ustraa.com/rest/V1/api/homemenucategories/v1.0.1?device_type=mob')
        .then((response)=>{
           const categories = response.data.category_list;
            console.log(categories);
            this.setState({categories:categories});
            
        console.log(categories[0].category_name);
        const categories_names = categories.map(function(category){
            return category.category_name;
        })
        this.setState({categories_names :categories_names});
        console.log("categories Names");
        console.log(categories_names);

        })
        .catch((error)=>{
            console.log(error);
        });

    }


render(){
    const categories_names = this.state.categories_names;
    
    return (
        <div>
        
       </div>
    );
    

  }
}

export default Categories ;