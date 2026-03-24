import HeroCarousel from '../../components/HeroCarousel'
import InfoSection from '../../components/InfoSection'
import type { ModalType } from '../../components/InfoModal'

interface HomeProps {
  onOpenModal: (type: ModalType) => void
}

function Home({ onOpenModal }: HomeProps) {
  return (
    <>
      <HeroCarousel />
      <InfoSection onOpenModal={onOpenModal} />
    </>
  )
}

export default Home
