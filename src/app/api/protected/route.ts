import { createClient } from '@/utils/superbaseServer';
import { NextResponse } from 'next/server';



export async function GET() {

  const supabase = await createClient();

  console.log('supabase', await supabase.auth.getUser());

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
  }

  console.log(user)
  return NextResponse.json({ message: `Hello ${user.email}` });
}