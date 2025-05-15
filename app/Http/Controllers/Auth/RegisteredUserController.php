<?php

namespace App\Http\Controllers\Auth;

use App\Http\Controllers\Controller;
use App\Models\Patient;
use App\Models\User;
use Illuminate\Auth\Events\Registered;

use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Facades\Storage ;
use Illuminate\Validation\Rules;
use Inertia\Inertia;
use Inertia\Response;

class RegisteredUserController extends Controller
{
    /**
     * Display the registration view.
     */
    public function create(): Response
    {
        return Inertia::render('Auth/Register');
    }

    /**
     * Handle an incoming registration request.
     *
     * @throws \Illuminate\Validation\ValidationException
     */
    public function store(Request $request): RedirectResponse
    {
        $request->validate([
            'name' => 'required|string|max:255',
            'gender' => 'required|string',
            'birth' => 'required',
            'blood_type' => 'required|string',
            'blood_resos' => 'required|string',
            'additional_case' => 'required|string',
            'avatar' => 'image|required',
            'email' => 'required|string|lowercase|email|max:255|unique:'.User::class,
            'password' => ['required', 'confirmed', Rules\Password::defaults()],
        ]);

        $user = User::create([
            'name' => $request->name,
            'email' => $request->email,
            'password' => Hash::make($request->password),
        ]);
        $avataePath=Storage::disk("public")->put("patients/",$request->avatar);
        $blood_type=$request->blood_type . $request->blood_resos;
        Patient::create([
            'name'=>$request->name,
            'gender'=>$request->gender,
            'avatar'=>$avataePath,
            'additional_case'=>$request->additional_case,
            'birth'=>$request->birth,
            'blood_type'=>$blood_type,
            'user_id'=>$user->id
        ]);

        event(new Registered($user));

        Auth::login($user);

        return redirect(route('patient.dashboard', absolute: false));
    }
}
