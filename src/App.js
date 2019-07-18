import React from 'react';
import * as contentful from "contentful";
import Layout from "./components/Layout/Layout";
// import Routes from "./Routes";
import './App.scss';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import Home from "./components/Home"
import Template1 from "./components/BlogTemplates/Template1";
import Template2 from "./components/BlogTemplates/Template2";
import Template3 from "./components/BlogTemplates/Template3";
import Template4 from "./components/BlogTemplates/Template4";
import Template5 from "./components/BlogTemplates/Template5";
import NotFound from "./components/NotFound/NotFound"


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

  // This is a Generic Fetch By ContentType Function for Contentful. It takes a query 
  FetchPosts = (query) => this.client.getEntries(query)

  SetBlogs = (response) => {
    this.setState({
      isEntriesLoading: false,
      allEntriesJSON:response.items,
    })
  }

  componentDidMount() {
    this.FetchPosts().then(this.SetBlogs).catch(console.error)
  }
  componentDidUpdate() {

  }

  GenerateBlogUrls() {
    const blogRoutes = this.state.allEntriesJSON.map(element => {
      const blogTemplate = element.sys.contentType.sys.id
      if(blogTemplate === "template1"){return(<Route path={`/${element.fields.url}`} component={Template1} key={element.sys.id} />)}
      if(blogTemplate === "template2"){return(<Route path={`/${element.fields.url}`} component={Template2} key={element.sys.id} />)}
      if(blogTemplate === "template3"){return(<Route path={`/${element.fields.url}`} component={Template3} key={element.sys.id} />)}
      if(blogTemplate === "template4"){return(<Route path={`/${element.fields.url}`} component={Template4} key={element.sys.id} />)}
      if(blogTemplate === "template5"){return(<Route path={`/${element.fields.url}`} component={Template5} key={element.sys.id} />)}
    });
    return blogRoutes
  }


  render() {
    if (!this.state.isEntriesLoading) {
      return (
        <div>
          <Router>
            <Layout>
              <Switch>
                <Route path="/" exact component={Home} />
                {this.GenerateBlogUrls()}
                <Route path="" component={NotFound} />
              </Switch>
            </Layout>
          </Router>
        </div>
      );
    }
    else { return "Loading....." }
  }
}

export default App;

{/* <Route path="/template1" component={Template1} /> */ }
{/*<Route path="/template2" component={Template2} />
            <Route path="/template3" component={Template3} />
            <Route path="/template4" component={Template4} />
            <Route path="/template5" component={Template5} /> */}

// state = {
//   isBlogsLoading: true,
//   BlogsJSON: null,

// }







//   // Contentful's Client 
//   client = contentful.createClient({
//     space: '9p60v33ghyi1',
//     accessToken: 'ea5JqnmoVlRw1YXC8Cde1OAIhjQEr_JyxwOZuLQo0N0'
//   })

//   componentDidMount() {
//     this.fetchPosts()
//   }

//   fetchPosts = () => this.client.getEntries().then(this.SetEntries).catch(console.error)

//   SetEntries = response => {
//     this.setState({
//       isEntriesLoading: false,
//       allEntriesJSON: response.items,
//     })
//   }

//   componentDidUpdate() {
//     console.log(this.state.allEntriesJSON)
//   }

//   state = {
//     isEntriesLoading: true,
//     allEntriesJSON: null,
//     Template1:[],
//     Template2:[],
//     Template3:[],
//     Template4:[],
//     Template5:[]
//   }

//   // Contentful's Client 
// client = contentful.createClient({
//   space: '9p60v33ghyi1',
//   accessToken: 'ea5JqnmoVlRw1YXC8Cde1OAIhjQEr_JyxwOZuLQo0N0'
// })

// // ====  Queries  ====
// Template1Query = {
//   content_type: "template1",
// }
// Template2Query = {
//   content_type: "template2",
// }
// Template3Query = {
//   content_type: "template3",
// }
// Template4Query = {
//   content_type: "template4",
// }
// Template5Query = {
//   content_type: "template5",
// }


// // This is a Generic Fetch By ContentType Function for Contentful. It takes a query 
// FetchByContentType = (query) => this.client.getEntries(query)


// SetTemplate1Content = response => {
//   this.setState({
//       isBlogLoading: false,
//       "BlogJSON": response.items,
//   })
// }

// componentDidMount() {
//   // Functions to Fetch Data from Contentful
//   this.FetchByContentType(this.Template1Query).then(this.SetTemplate1Content).catch(console.error)
//   this.FetchByContentType(this.Template2Query).then(this.SetTemplate2Content).catch(console.error)
// }

// componentDidUpdate() {
//   console.log(this.state.BlogJSON);

// }

