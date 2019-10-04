public static boolean LinearSearch( String word , char letter){
    for (int i= 0;i<word.length();i++){
        if(word.charAt(i)==letter)
            return true;
    }
    return false;
}


