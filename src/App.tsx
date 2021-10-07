import React from 'react';
import './App.css';
import {useTrack, useVariation} from "./hooks/useFfc";

function App() {
  const variation = useVariation();

	return (
		<div className="App">
			{
				variation==='产品经理版1'&&(
					<div className="row" id='version-a'>
						<h3>产品经理版1</h3>
						<a href="#" onClick={useTrack}>开始使用</a>
					</div>
				)
			}
			{
				variation === '程序员版1'&&(
					<div className="row" id='version-b'>
						<h3>程序员版1</h3>
						<a href="#" onClick={useTrack}>开始使用</a>
					</div>
				)
			}
			{
				variation==='产品经理版2'&&(
					<div id="version-c">
						<div className="row">
							<h3>产品经理版2</h3>
							<a href="#" onClick={useTrack}>开始使用</a>
						</div>
					</div>
				)
			}
		</div>
	);
}

export default App;
