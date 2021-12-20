import React, {
    Component
} from "react";
import { SafeAreaView } from "react-native";
import AppContainer from "./navigation";



class App extends Component {

    constructor(props) {
        super(props);

    }

    render() {

        return (
            <SafeAreaView style={{ flex: 1 }}>
                <AppContainer />
            </SafeAreaView>
        );
    }
}

export default App;