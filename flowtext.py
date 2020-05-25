#! /usr/bin/env python
import argparse
import textwrap

def word_with_punc(word):
    punc_r = [".",";",":","!","?","/","\\",",","#","@","$","&","\"","-"]

    if word[-1] in punc_r:
        word=word[-1]+word[:-1]
    elif ')' in word:
        word='(' + word[:-1]
    elif ']' in word:
        word='[' + word[:-1]
    elif '}' in word:
        word='[' + word[:-1]
    elif '(' in word:
        word=word[1:]+')'
    elif '[' in word:
        word= word[1:]+']'
    elif '{' in word:
        word= word[1:]+'}'
    else:
        word=word
    return (word)
def reverse_sentense(row):
    nsentense=list()
    row.reverse()
    for w in row:
        nsentense.append(word_with_punc(w))
    return(nsentense)
def flowtext(args):
    width = args.width
    fout = open(args.output, "w")
    f = open(args.input)
    pars=f.read().split('\n\n')
    f.close()
    for par in pars:
        if len(par) > 0:
            fout.writelines ('\n\n'+'\r')
            flow=[]
            lines=textwrap.wrap(par, width)
            for i in range (len(lines)):
                line_index=i+1
                if line_index%2:
                    flow.append(['>>>']+lines[i].split()+['\r'])
                elif len(lines[i])< width/2:
                    flow.append([' ']*(int(width/3))  + reverse_sentense(lines[i].split())+['<<<']+['\r'])
                else:
                    flow.append(reverse_sentense(lines[i].split())+['<<<']+['\r'])
            for line in flow:
                fout.writelines(' '.join(line))           
        else: pass
    fout.close()

def main():
    parser=argparse.ArgumentParser(description="Convert a text file to a flowmode")
    parser.add_argument("-in",help="text input file" ,dest="input", type=str, required=True)
    parser.add_argument("-out",help="text output filename" ,dest="output", type=str, required=True)
    parser.add_argument("-w",help="total length of one line Default=70" ,dest="width", type=int, default=70)
    parser.set_defaults(func=flowtext)
    args=parser.parse_args()
    args.func(args)

if __name__=="__main__":
    main()