<?php

namespace Database\Factories;

use Illuminate\Database\Eloquent\Factories\Factory;
use Illuminate\Support\Str;

class UserFactory extends Factory
{
    /**
     * Define the model's default state.
     *
     * @return array
     */
    public function definition()
    {
        $isAdmin = $this->faker->boolean;

        if ($isAdmin) {
            return [
                'name' => $this->faker->name(),
                'email' => 'admin@gmail.com',
                'email_verified_at' => now(),
                'password' => bcrypt('admin'), // password
                'role' => 1,
                'remember_token' => Str::random(10),
            ];
        } else {
            return [
                'name' => $this->faker->name(),
                'email' => 'user@gmail.com',
                'email_verified_at' => now(),
                'password' => bcrypt('user'), // password
                'remember_token' => Str::random(10),
            ];
        }
    }

    /**
     * Indicate that the model's email address should be unverified.
     *
     * @return \Illuminate\Database\Eloquent\Factories\Factory
     */
    public function unverified()
    {
        return $this->state(function (array $attributes) {
            return [
                'email_verified_at' => null,
            ];
        });
    }
}
