import {Component} from '@angular/core';
import {Post} from '../post.model';

@Component({
    selector: 'app-post-list',
    templateUrl: './postList.component.html',
    styleUrls: ['./postList.component.css']
})

export class PostListComponent {
    posts: Post[] = [
        {
            id: 1,
            title: 'First post',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad adipisci, aperiam beatae cum dignissimos harum ipsam ipsum, maxime numquam odit officiis possimus provident repudiandae, sed sit voluptas. Accusamus beatae dolor est eveniet fugit id iste, maxime mollitia neque odio quaerat quam quas quidem, quisquam repellendus repudiandae rerum sint veritatis',
            image: '/assets/img/02.jpg'
        },
        {
            id: 2,
            title: 'First second',
            description: 'Lorem ipusm post descrtiption',
            image: '/assets/img/02.jpg'
        },
        {
            id: 3,
            title: 'First third',
            description: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. A ad adipisci, aperiam beatae cum dignissimos harum ipsam ipsum, maxime numquam odit officiis possimus provident repudiandae.',
            image: '/assets/img/02.jpg'
        }
    ];


    onEdit(id: number) {
        console.log(id);
    }

    onDelete(id: number) {
        const post = this.posts.findIndex(post => post.id === id);
        this.posts.splice(post, 1);
    }

}