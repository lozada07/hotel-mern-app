import Input from '../../../components/ui/Input'
import TextArea from '../../../components/ui/TextArea'
import ContainerForm from './ContainerForm'

const AccommodationInformation = () => {
    return (

        <ContainerForm title='Hotel Information'>


            <div className='space-y-2'>

                <div className="grid grid-cols-2 gap-3">
                    <Input labelName='Country' name='country' type='text' />
                    <Input labelName='City' name='city' type='text' />
                </div>
                <Input labelName='Name' name='name' type='text' />
                <TextArea />
            </div>



        </ContainerForm>



    )
}

export default AccommodationInformation