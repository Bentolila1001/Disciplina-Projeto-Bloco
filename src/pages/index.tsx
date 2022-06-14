import type { NextPage } from 'next'
import Home from '../presentantion/pages'
import { makeRemoteListAllPraias } from '../main/factories/useCases/praias-read-all-factorie'



const MakeIndex: NextPage = () => {
  return (
    <Home />
  )
}

export default MakeIndex


