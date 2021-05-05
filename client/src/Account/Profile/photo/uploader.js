import React from 'react';
import Button from '@material-ui/core/Button';
import './uploader.css';

class ImageUpload extends React.Component {
    constructor(props) {
      super(props);
      this.state = {file: '',imagePreviewUrl: ''};
    }
  
    _handleSubmit(e) {
      e.preventDefault();
      console.log('handle uploading-', this.state.file);
    }
  
    _handleImageChange(e) {
      e.preventDefault();
  
      let reader = new FileReader();
      let file = e.target.files[0];
  
      reader.onloadend = () => {
        this.setState({
          file: file,
          imagePreviewUrl: reader.result
        });
      }
  
      reader.readAsDataURL(file)
    }
  
    render() {
      let {imagePreviewUrl} = this.state;
      let $imagePreview = null;
      if (imagePreviewUrl) {
        $imagePreview = (<img src={imagePreviewUrl} alt="pic" />);
      } else {
        $imagePreview = (<div className="previewText">PHOTO</div>);
      }
  
      return (
      
      <div className="previewComponent">
          <form onSubmit={(e)=>this._handleSubmit(e)}>
           <div className="imgPreview">
            {$imagePreview}
          </div>   
          
          <input
              accept="image/*"
              id="contained-button-file"
              multiple
              type="file"
              onChange={(e)=>this._handleImageChange(e)}
             />
             
             <label htmlFor="contained-button-file">
               <Button variant="contained" color="primary" component="span" onClick={(e)=>this._handleSubmit(e)}>
                 Upload
              </Button>
              </label>
           </form>
          
        </div>
      )
    }
  }
    
  export default ImageUpload;