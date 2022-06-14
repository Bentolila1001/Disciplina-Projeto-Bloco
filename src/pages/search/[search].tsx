import { NextPage } from "next";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { makeRemoteListAllPraias } from "../../main/factories/useCases/praias-read-all-factorie";
import { makeRemoteListAllResutaurantes } from "../../main/factories/useCases/restaurante-read-all";
import MakeSearch from "../../presentantion/pages/search";

const Search: NextPage = () => {


    return (
        <MakeSearch
            praiasGet={makeRemoteListAllPraias()}
            restauranteGet={makeRemoteListAllResutaurantes()} />
    )
}

export default Search