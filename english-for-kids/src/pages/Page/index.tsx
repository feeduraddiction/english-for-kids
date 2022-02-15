import { Route } from "react-router-dom";
import CardsList from "@components/CardsList";

export interface pagePropTypes{

}

const Page = () => {
    return <Route path={`/`}>
        {/*<CardsList />*/}
    </Route>
}

export default Page;