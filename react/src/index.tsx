import * as React from "react";
import * as ReactDOM from "react-dom";

import {Hello} from "./components/Hello";
import {Greet} from "./components/Greet";

ReactDOM.render(
	<section>
		<Hello compiler="Typescript" framework="React" />
		<Greet name="Robert"/>
	</section>,
	document.getElementById("example")
)