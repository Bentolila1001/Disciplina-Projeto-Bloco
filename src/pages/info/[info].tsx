import { NextPage } from "next"
import Info from "../../presentantion/pages/info"
import { useRouter } from "next/router"
import { makeRemotePraiasById } from "../../main/factories/useCases/praias-read-by-id-factorie"
import { makeRestauranteById } from "../../main/factories/useCases/restaurante-read-by-id-factorie"

const MakeInfo: NextPage = () => {
    return (
        <Info
            praiasGet={makeRemotePraiasById()}
            restauranteGet={makeRestauranteById()}
        />

    )
}

export default MakeInfo