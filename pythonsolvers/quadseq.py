# Warning: Doesn't work
# Only output is 'None'
def quadseq(sequence):
    # First and second differences
    firstdiff1 = (sequence[0] - sequence[1])
    firstdiff2 = (sequence[2] - sequence[3])
    seconddiff = firstdiff1 - firstdiff2
    # Constant and nsquared
    nsqr = seconddiff / 2
    secondseq = []
    for i in range (0,4):
        secondseq.append(nsqr * (i+1)**2)
    const = sequence[0] - secondseq[0]
    # Coefficient to 'n' if needed
    if const != (sequence[1] - secondseq[1]):
        ndiff = []
        for i in range (0,4):
            ndiff.append(sequence[i] - secondseq[i])
        n = ndiff[0] - ndiff[1]
    # Output
    answer = (str(nsqr) + "^2", n, const)
sequence = []
for i in range (0,4):
    sequence.append(int(input("Enter number")))
answer = quadseq(sequence)
print(answer)