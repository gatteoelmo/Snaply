
import { useForm } from "react-hook-form";
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { addDoc, collection } from "firebase/firestore";
import { auth, db } from "../../config/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import { CreateFormStyled } from "../../components/styles/CreateFormStyled";

interface CreateForData {
    title: string;
    description: string;
}

export const CreateForm = () => {
    const [user] = useAuthState(auth)


    const schema = yup.object().shape({
        title: yup.string().required('You must enter a title'),
        description: yup.string().required('You must enter a description'),
    })

    
    const { register, handleSubmit, formState: { errors } } = useForm<CreateForData>({
        resolver: yupResolver(schema)
    })

    const postsRef = collection(db, 'posts')

    const onCreatePost = async (data: CreateForData) => {
        console.log(data)
        console.log('onCreatePost chiamata  ')
        await addDoc(postsRef, {
            title: data.title,
            description: data.description,
            username: user?.displayName,
            userID: user?.uid
        })
    }

    return (
        <CreateFormStyled onSubmit={(e) => {
            console.log('Form sottoposto');
            handleSubmit(onCreatePost)(e);
          }}>
            <div>
                <label htmlFor="title">Create new Post!</label>
                <input placeholder="title..."  {...register('title')}/>
                <p style={{color: 'red'}}>{errors.title?.message}</p>
                <textarea placeholder="description..." {...register('description')} />
                <p style={{color: 'red'}}>{errors.description?.message}</p>
                <input className="submit" type="submit" onClick={(e) => {
  console.log('Pulsante di submit cliccato')}} />
            </div>
            
        </CreateFormStyled>
    )
}