'use client'
import AppSideBar from "../_components/AppSideBar"; 
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
  } from "@/components/ui/card"
import { getAllBlogs, getBlogById } from "./_service/BlogService";
import BlogModel from './_model/BlogModel'
import SideBarComponent from "../_components/SideBarComponent";
import { Toggle } from "@/components/ui/toggle";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import BlogModal from "./_components/BlogModal";

const blogs = await getAllBlogs();


export default function BlogHomePage(){
    const [isToggled, toggle] = useState('');

    
    
    return (<SideBarComponent><div className="grid grid-rows-4 grid-cols-4 gap-4">
            {blogs.map(b=><div className="">
                <Button className="p-4 size-full" onClick={(i) =>toggle(e=>b.id)}>
                <Card style={{backgroundImage:`url(${b.imageUrl})`,backgroundSize: 'cover',
                backgroundPosition: 'center'}}>
  <CardHeader>
    <CardTitle>{b.title}</CardTitle>
  </CardHeader>
  <CardContent>
    <p>{b.body}</p>
  </CardContent>
  <CardFooter>
    <p>Card Footer</p>
  </CardFooter>
</Card></Button>
<BlogModal isOpen={isToggled} open={toggle} blog={b}/>
</div>
            )}
        

        </div>
        
        </SideBarComponent>)
}