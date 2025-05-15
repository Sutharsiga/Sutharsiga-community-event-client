import db from '@/utils/db';
import { createClient } from '@/utils/superbaseServer';
import { NextResponse } from 'next/server';



export async function superBaseAuth() {

}

export async function GET() {

    // superbase auth section has to be repeated in every route calls.
    const supabase = await createClient();

    console.log('supabase', await supabase.auth.getUser());

    const {
        data: { user },
    } = await supabase.auth.getUser();

    if (!user) {
        return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }


    
    const result = await db.query('SELECT * FROM users LIMIT 10')

    //   return NextResponse.json({ message: `Hello ${user.email}` });
    return NextResponse.json({ users: result.rows })
}