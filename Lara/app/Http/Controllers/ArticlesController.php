<?php

namespace App\Http\Controllers;

use App\Models\User;
use Illuminate\Http\Request;
use App\Models\Article;
use Illuminate\Support\Facades\Storage;

class ArticlesController extends Controller
{
    public function index(Request $request)
    {

        // $articles = Article::orderBy('created_at', 'desc')->get();
        // return response()->json($articles);
        $articles = Article::orderBy('created_at', 'desc')->get();
        $articles->transform(function ($article) {
            // $article->image = asset('storage/' . $article->image);
            $article->image='http://127.0.0.1:8000/'.'article_images/'.$article->image;
            return $article;
        });

        return response()->json($articles);
    }
    public function show($id)
    {
        $article = Article::find($id);
            $article->image='http://127.0.0.1:8000/'.'article_images/'.$article->image;
            // $post->image = asset('storage/' . $post->image);

        return response()->json($article);
    }
    public function store(Request $request)
    {

        $validatedData = $request->validate([
            'title' => 'required',
            'article' => 'required',
            'category' => 'required',
            'user_id' => 'required|exists:users,id',
            // Validate the user ID exists in the users table
            // 'image'=>'image|mimes:jpeg,png,jpg,gif|max:2048',
            'image' => 'sometimes|mimes:jpeg,jpg,png,gif,jfif,bmp'
        ]);

        $post = new Article();
        $post->title = $validatedData['title'];
        $post->article = $validatedData['article'];
        $post->user_id = $validatedData['user_id'];
        $post->category = $validatedData['category'];
        if ($request->hasFile('image')) {
            // $imagePath = $request->file('image')->store('article_images', 'public'); // Adjust folder and disk as needed
            // $post->image = $imagePath;
            $image = $request->file('image');
            $image_name = time(). '.'.$image->getClientOriginalName();
            // $image_name = $image->getClientOriginalName();
            // $image->move(getcwd().'/article_images');
            $image->move(getcwd().'/article_images', $image_name);
            $post->image=$image_name;
        }
        $post->save();

        //   return $imagePath;
        return response()->json($post, 201);
    }
    public function destroy($id)
    {
        $article = Article::findOrFail($id);
        if($article->image)
        {
            $image_path = public_path('article_images'.$article->image);
            if (file_exists($image_path))
            {
                unlink($image_path);
            }
        }
        $article->delete();
        return response()->json(['message' => 'One article deleted successful']);
    }
    public function edit($id)
    {

        $article = Article::find($id);

        return response()->json($article);

    }
    public function update(Request $request)
    {
        
        $validatedData = $request->validate([
            'title' => 'required',
            'article' => 'required',
            'category' => 'required',
            'user_id' => 'required|exists:users,id',
            'image' => 'sometimes|mimes:jpeg,jpg,png,gif,jfif,bmp'
        ]);
        // return $request->post_id;
        $post = Article::FindOrFail($request->post_id);
        // return $post;
        $post->update([
            'title' => $request->title,
            'article' => $request->article,
            'category' => $request->category,
            'user_id' => $request->user_id,
        ]);
        if ($request->hasFile('image')) {
            if ($post->image) {
                Storage::delete('public/' . $post->image); // Adjust the path as needed
            }
            // $imagePath = $request->file('image')->store('article_images', 'public'); // Adjust folder and disk as needed
            $image = $request->file('image');
            $image_name =time().'.'. $image->getClientOriginalName();
            $image->move(getcwd().'/article_images', $image_name);
            $post->update(['image'=>$image_name]);
            // $post->update(['image' => $imagePath]);
             }

        return response()->json($post, 201);
    }
    public function download()
    {
        // return 1;
        $filePath = public_path('cv/nober_cv.pdf'); // Path to your CV file
        $headers = ['Content-Type: application/pdf'];
        return response()->download($filePath, 'nober_cv.pdf', $headers);
    }
}