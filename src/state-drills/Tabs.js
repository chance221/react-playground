import React from 'react';

const tabsProp = [
    { name: 'First tab',
      content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque.' },
    { name: 'Second tab',
      content: 'Laboriosam exercitationem quos consectetur expedita consequatur. Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit.' },
    { name: 'Third tab',
      content: 'Fugit, sapiente aspernatur corporis velit, dolor eum reprehenderit provident ipsam, maiores incidunt repellat! Facilis, neque doloremque. Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam exercitationem quos consectetur expedita consequatur.' },
  ];

class Tabs extends React.Component {
    static defaultProps = { tabs: [] };
    state = {
        currentTabIndex:0
    };
        handleButtonClick= (index) =>{
            this.setState({currentTabIndex:index})
        }
        renderButtons(){
            return this.props.tabs.map((tab, index)=> (
                <button key={index} onClick={() =>this.handleButtonClick(index)}>
                    {tab.name}
                </button>
            ))
        }
        renderContent(){
            const currentTab = this.props.tabs[this.state.currentTabIndex]
            return (
                <div className='content'>
                    {currentTab.content}
                </div>
            )
        }
        render() {
            return(
                <div>
                    {this.renderButtons()}
                    {this.props.tabs.length && this.renderContent()}
                </div>

            )
        }
}

export default Tabs;

//We need to add event handelers for each button click so we can change the content when each button is clicked












    // THis was the unrefactored way to get the content to render to the screen. Notice how it did not break down the process to individual functions like above. Above is the perferred way.
    // const buttons = this.props.tabs.map((tab, index) => (
    //     <button key={index}>
    //         {tab.name}
    //     </button>
    //     )
    // )
    // const currentTab=this.props.tabs[0]
    //     return( 
    //     <div>
    //         {this.props.tabs.length && (
    //         <div className='content'>
    //             {currentTab.content}
    //         </div>
    //         )}
    //     </div>
    //     )
    


