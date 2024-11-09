'client side'
import { CardContent, CardFooter, CardHeader, Card } from "@/components/ui/card";
import Blog from "../_model/BlogModel";
import { Input } from "@/components/ui/input";
import {Textarea} from '@/components/ui/textarea'
import { Button } from "@/components/ui/button";
import { useEffect } from "react";




export default function BlogModal({blog, isOpen, open}:{blog:Blog, isOpen:string, open:Function}){
    if (isOpen!==blog.id) return null;

    const handler = ()=>{
        open('');
        useEffect(()=>{
            //faz o fetch
        },[isOpen])
    }
    return(
        <div>
        <div className="top-0 left-0 absolute bg-black size-full z-10 sepia-0 opacity-30 ">
            </div>
            
     <Card className="top-14 left-14 absolute z-20 size-11/12 h-5/6 opacity-1">
        <CardHeader>
            <Input value={blog.title} type="text" />
        </CardHeader>
        <CardContent>
            <Textarea value={blog.body}/>
        </CardContent>
        <CardFooter>
            <Button onClick={a=>open(e=>'')}>Fechar</Button>
            <Button onClick={a=>handler()}>Salvar</Button>
        </CardFooter>
    </Card>
    </div>
    )
}