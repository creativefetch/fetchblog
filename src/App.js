import React from 'react';
import * as contentful from "contentful";
import Layout from "./components/Layout/Layout";
import './App.scss';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./components/Home"
import Template1 from "./components/BlogTemplates/Template1";
import Template2 from "./components/BlogTemplates/Template2";
import Template3 from "./components/BlogTemplates/Template3";
import Template4 from "./components/BlogTemplates/Template4";
import Template5 from "./components/BlogTemplates/Template5";
import NotFound from "./components/NotFound/NotFound";
import LoadingPage from "./components/LoadingPage/LoadingPage";


class App extends React.Component {

  state = {
    isEntriesLoading: true,
    allEntriesJSON: null,
  }
  

  // Contentful's Client 
  client = contentful.createClient({
    space: '9p60v33ghyi1',
    accessToken: 'ea5JqnmoVlRw1YXC8Cde1OAIhjQEr_JyxwOZuLQo0N0'
  })

// once the Application has loaded it then goes to fetch the content from contentful
// it first does the Generic Fetch Function once the promise of the fetch has finished and returned the Content JSON from the CMS
// The set blog Function runs
  componentDidMount() {
    this.FetchPosts().then(this.SetBlogs).catch(console.error)
  }

  // This is a Generic Fetch Function By ContentType Function for Contentful. 
  // It takes a query object and fetches the query from contentful using the client
  FetchPosts = (query) => this.client.getEntries(query)

  // This stores the JSON data to the component state for reuse and rendering
  // one the data is set then stop loading
  SetBlogs = (response) => {
    this.setState({
      isEntriesLoading: false,
      allEntriesJSON:response.items,
    })
  }

// This Function Dynamically creates the Url Links for Each Blog
// because there are five different templates we need to determine which template needs to be rendered.
// this function loops through the All the Json data. 
//  each element in json array is one blog. and in the blog data there is contentType field which tells us which template to render.

  GenerateBlogUrls() {
    // map creates a new array of Dynamic Links
    const blogRoutes = this.state.allEntriesJSON.map(element => {
      // blogTemplate variable gets the template it should render it.
      const blogTemplate = element.sys.contentType.sys.id

      // these if statements are run through. if the template from the data matches one of these. it creates that route with the right template.
      if(blogTemplate === "template1"){return(<Route path={`/${element.fields.url}`} key={element.sys.id} render={(props) => (<Template1 {...props} blogJson={element} />)} />)}
      if(blogTemplate === "template2"){return(<Route path={`/${element.fields.url}`} key={element.sys.id} render={(props) => (<Template2 {...props} blogJson={element} />)} />)}
      if(blogTemplate === "template3"){return(<Route path={`/${element.fields.url}`} key={element.sys.id} render={(props) => (<Template3 {...props} blogJson={element} />)} />)}
      if(blogTemplate === "template4"){return(<Route path={`/${element.fields.url}`} key={element.sys.id} render={(props) => (<Template4 {...props} blogJson={element} />)} />)}
      if(blogTemplate === "template5"){return(<Route path={`/${element.fields.url}`} key={element.sys.id} render={(props) => (<Template5 {...props} blogJson={element} />)} />)}
    });
    
    // returns an array of routes ready to render.
    return blogRoutes
  }


  render() {
    {console.log(this.state.allEntriesJSON)}
    // once the data has arrived. render the JSX/HTML
    if (!this.state.isEntriesLoading) {
      return (
        <div>
          <Router>
            <Layout>
              <Switch>
                <Route exact path="/" render={(props) => (<Home {...props} blogJson={this.state.allEntriesJSON} />)} />
                {this.GenerateBlogUrls()}
                <Route component={NotFound} />
              </Switch>
            </Layout>
          </Router>
        </div>
      );
    }
    // if the data has not arrived yet. then it keeps on loading
    else { return <LoadingPage/> }
  }
}

export default App;
